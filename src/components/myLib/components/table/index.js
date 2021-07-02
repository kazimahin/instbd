import React, { useState } from 'react' 
import { Table, TableHead,    TablePagination, TableSortLabel , Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import {MInput} from "../../controls/index";
import { Search } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import Skeleton from '@material-ui/lab/Skeleton';




const useStyles = makeStyles(theme => ({
    pageContent: {
         padding: theme.spacing(3),
         
        //  marginTop:"10px",
    },
    table: {
        
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.dark,
            backgroundColor: theme.palette.primary.light,
        },
        '& .MuiTableSortLabel-root:hover': {
             color:"black",
         },
         '& .MuiTableSortLabel-active':{
            color: "black",
        },
        '& .MuiTableSortLabel-root.MuiTableSortLabel-active.MuiTableSortLabel-root.MuiTableSortLabel-active .MuiTableSortLabel-icon':{
            color: "gray",
        },
        '& .MuiTableSortLabel-root .MuiTableSortLabel-icon':{
            color: "gray",
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: theme.palette.action.selected            ,
            cursor: 'pointer',
        },
    },
    searchInput: {
        width: '75%'
    },
    pagination:{
        "& .MuiTablePagination-caption ":{
            [theme.breakpoints.down('xs')]: {
                width:"25px"
            },
        }
    }
 
}))









function useTable(records, headCells,filterFn,props) {

    const classes = useStyles();

    const pages = [5, 10, 25 , 50, { value: 9999999999, label: 'All' }]
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(pages[props.rowCountIndex] || pages[2])
    const [order, setOrder] = useState()
    const [orderBy, setOrderBy] = useState()

    const TblContainer = props => (
        <Table className={classes.table}>
            {props.children}
        </Table>
    )

    const TblHead = props => {

        const handleSortRequest = cellId => {
            const isAsc = orderBy === cellId && order === "asc";
            setOrder(isAsc ? 'desc' : 'asc');
            setOrderBy(cellId)
        }

        return (<TableHead>
            <TableRow>
                 {
                    headCells.map(headCell => (
                        <TableCell key={headCell.id}
                            sortDirection={orderBy === headCell.id ? order : false}>
                            {headCell.disableSorting ? headCell.label :
                                <TableSortLabel
                                    active={orderBy === headCell.id}
                                    direction={orderBy === headCell.id ? order : 'asc'}
                                    onClick={() => { handleSortRequest(headCell.id) }}>
                                    {headCell.label}
                                </TableSortLabel>
                            }
                        </TableCell>))
                }
            </TableRow>
        </TableHead>)
    }

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0);
    }

    const TblPagination = () => (
        <TablePagination
            className={classes.pagination}
            component="div"
            page={page}
            rowsPerPageOptions={pages}
            rowsPerPage={rowsPerPage}
            count={records.length}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            style={{overflowX:"auto"}}
        />
    )

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    function getComparator(order, orderBy) {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    function descendingComparator(a, b, orderBy) {
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const recordsAfterPagingAndSorting = () => {
        return stableSort(filterFn.fn(records), getComparator(order, orderBy))
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }

    return {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    }
}











// data headCells searchLebel rowCountIndex
export  function MTable(props) {


    const classes = useStyles();
    const [records, setRecords] = useState(props.data)
    const [filterFn, setFilterFn] = useState({ fn: items => { return items; } })

    const {
        TblContainer,
        TblHead,
        TblPagination, 
        recordsAfterPagingAndSorting
    } = useTable(records, props.headCells, filterFn,props);

    const handleSearch = e => {
        let target = e.target;
        setFilterFn({
            fn: items => {
                if (target.value == ""){
                    return items;
                }else{
                    return items.filter(x =>{
                        var  returnvalue = false
                        Object.keys(x).map((v)=>{
    
                            if(typeof x[v] === 'string'){
                                x[v].toLowerCase().includes(target.value)  && (returnvalue = true)
                            }else if(typeof x[v] === 'number'){
                                x[v].toString().toLowerCase().includes(target.value)  && (returnvalue = true)
                            }else if(Array.isArray(x[v])){

                                x[v][0].toString().toLowerCase().includes(target.value)  && (returnvalue = true)
                            }
                              
                        })
                        return returnvalue
                    })
                }
                
            }
        })
    }

    return (
            
        <>
        
            {
                (!props.loading) && 
                    <Paper className={classes.pageContent}>
    

                        {
                            (! props.disableSearch) && 
                            <Toolbar>
                                <MInput
                                    label={props.searchLebel || "search"}
                                    className={classes.searchInput}
                                    InputProps={{
                                        startAdornment: (<InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>)
                                    }}
                                    onChange={handleSearch}
                                />
                            </Toolbar>
                        }

                        <div style={{overflowX:"auto"}} >
                            <TblContainer  >
                                <TblHead />
                                <TableBody>
                                    {
                                        recordsAfterPagingAndSorting().map(item =>
            
                                                <TableRow key={item.id}>
                                                    {
                                                    Object.keys(item).map(v=>(Array.isArray(item[v])) ?<TableCell><Link style={{color:"inherit"}} to={item[v][1]}>{item[v][0]}</Link></TableCell>  : <TableCell> {item[v]}</TableCell>)
                                                    
                                                    }
                                                </TableRow> 
                                        )
                                    }
                                </TableBody>
                            </TblContainer>
                        </div>


                        
                        <TblPagination />
                    </Paper>
            }
            {
                (props.loading) &&<Skeleton  style={{transform:"none",marginTop:"0px",marginBottom:"10px"}}  height={600} />

            }

        </>

            
     )
}
