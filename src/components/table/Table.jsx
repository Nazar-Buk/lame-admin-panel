import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import "./table.scss";

const rows = [
  {
    id: 1143155,
    product: "Acer Nitro 5",
    img: "https://content1.rozetka.com.ua/goods/images/big/320706818.jpg",
    customer: "John Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 24635483,
    product: "Playstation 5",
    img: "https://img.mta.ua/image/cache/data/foto/z851/851846/photos/Sony-PlayStation-5-Slim-1TB-47-White-01-600x600.jpg",
    customer: "Nazar Buk",
    date: "1 March",
    amount: 785,
    method: "Online payment",
    status: "Approved",
  },
  {
    id: 73849593,
    product: "DURABOOK Z14",
    img: "https://files.foxtrot.com.ua/PhotoNew/img_0_58_26811_0_1_6wzTrS.webp",
    customer: "Bohdan Buk",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 35627723,
    product: "Alienware M18 R2",
    img: "https://cdn.tehnoezh.ua/0/0/0/1/7/2/2/7/5/000172275_545_545.jpeg",
    customer: "Iryna Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 74536388,
    product: "ASUS ROG Zephyrus",
    img: "https://cdn.tehnoezh.ua/0/0/0/1/3/0/5/7/4/000130574_545_545.jpeg",
    customer: "Ihor Smith",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Pending",
  },
  {
    id: 45456745,
    product: "Razer Blade 16",
    img: "https://cdn.tehnoezh.ua/0/0/0/1/6/4/7/0/8/000164708_545_545.jpeg",
    customer: "Volodymur Diduk",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 67676789,
    product: "Apple MacBook Pro 16",
    img: "https://smartmag.biz.ua/content/images/9/390x390l80br0/25830335026159.webp",
    customer: "Roman Bolshevskii",
    date: "1 March",
    amount: 785,
    method: "Cash on Delivery",
    status: "Approved",
  },
  {
    id: 34342121,
    product: "DEll",
    img: "https://www.dell.com/wp-uploads/2024/05/Latitude-7455-front-and-back-scaled.jpeg",
    customer: "Taras Smith",
    date: "1 March",
    amount: 785,
    method: "Online",
    status: "Pending",
  },
];

const List = () => {
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="laptop" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
