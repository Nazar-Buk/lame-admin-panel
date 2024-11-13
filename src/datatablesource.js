export const userRows = [
  {
    id: 1,
    username: "Sabrina",
    img: "https://cdn2.stylecraze.com/wp-content/uploads/2013/06/Different-Beautiful-American-Girls.jpg",
    status: "active",
    email: "sabrina_Girls@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Nihau",
    img: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    status: "active",
    email: "nihau-Girls@gmail.com",
    age: 15,
  },
  {
    id: 3,
    username: "Kate",
    img: "https://img.freepik.com/free-photo/portrait-two-young-beautiful-blond-smiling-hipster-girls-trendy-summer-white-t-shirt-clothes-positive-models-having-fun-hugging_158538-5798.jpg",
    status: "pending",
    email: "kate-Girls@gmail.com",
    age: 25,
  },
  {
    id: 4,
    username: "Linda",
    img: "https://img.freepik.com/free-photo/portrait-blonde-woman-looking-photographer_23-2148348970.jpg",
    status: "pending",
    email: "linda-Girls@gmail.com",
    age: 20,
  },
  {
    id: 5,
    username: "Olga",
    img: "https://img.freepik.com/premium-photo/beautiful-young-woman-outdoors-looking-camera_608297-30616.jpg?semt=ais_hybrid",
    status: "passive",
    email: "olga-Girls@gmail.com",
    age: 21,
  },
  {
    id: 6,
    username: "Svitlana",
    img: "https://photosbull.com/wp-content/uploads/2024/05/1000060133.jpg",
    status: "active",
    email: "svitlana-Girls@gmail.com",
    age: 35,
  },
  {
    id: 7,
    username: "Viktoria",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSboWUluTFihcp2T5Iqi7zF0iEmO1Twgj056g&s",
    status: "active",
    email: "viktoria-Girls@gmail.com",
    age: 18,
  },
  {
    id: 8,
    username: "Toma",
    img: "https://plus.unsplash.com/premium_photo-1661389623111-1e83483afd7e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBnaXJsfGVufDB8fDB8fHww",
    status: "passive",
    email: "toma-Girls.com",
    age: 35,
  },
  {
    id: 9,
    username: "Oleksandra",
    img: "https://photosnow.org/wp-content/uploads/2024/04/36_cute-girl-pic.jpg",
    status: "active",
    email: "oleksandra-Girls@gmail.com",
    age: 35,
  },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImage">
          <img className="cellImg" src={params.row.img} alt="photo" />
          {params.row.username}
        </div>
      );
    },
  },
  { field: "email", headerName: "Email", width: 230 },
  { field: "age", headerName: "Age", width: 100 },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <span className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </span>
      );
    },
  },
];
