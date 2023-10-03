import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { Button } from "@mui/material";
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Product name", width: 160 },
  {
    field: "discription",
    headerName: "Discription",
    width: 160,
  },
  {
    field: "price",
    headerName: "Price",
    width: 120,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 90,
  },
  {
    field: "sold",
    headerName: "Sold",
    width: 90,
  },
  {
    field: "category",
    headerName: "Category",
    description: "This column has a value getter and is not sortable.",
    width: 120,
    renderCell: (params) => {
      return (
        <>
          <span>{params.row.category.name}</span>
        </>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    description: "Action",
    sortable: false,
    width: 160,
    renderCell: (params) => {
      return (
        <>
          <div className="cellAction">
            <Button
              className="p-1 me-1"
              color="success"
              size="small"
              variant="contained"
              //   onClick={(e) => handleUpdate(params.row.id)}
            >
              Update
            </Button>

            <Button
              className="p-1"
              color="error"
              variant="contained"
              size="small"
              //   onClick={(e) => handleDelete(params.row.id)}
            >
              Delete
            </Button>
          </div>
        </>
      );
    },
  },
];
const product = [
  {
    id: 1,
    name: "Snow",
    discription: "Jon",
    price: 35,
    quantity: 23,
    sold: 25,
    category: "hello",
  },
];
function ProductList() {
  return (
    <>
      <div className="product-list-wrapper">
        <div>
          <div className="py-4">
            <Button variant="contained">Add Product</Button>
          </div>
          <div className="product-list position-relative">
            <DataGrid
              rows={product}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
