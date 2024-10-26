import { Table, Row, Col } from "react-bootstrap";
import Modals from "../components/modals";
import BodyModals from "../components/bodyModals";
import SearchForm from "../components/searchForm";
import { useState } from "react";
import { Pagination } from "react-bootstrap";

const Items = () => {
  const data = [
    {
      ID: 1,
      ItemCategory: "Electronics",
      ItemName: "Smartphone",
      ItemBrand: "Brand A",
      ItemColor: "Black",
      ItemSerialNumber: "SN1234567890",
      ItemDescription: "Latest model with advanced features",
    },
    {
      ID: 2,
      ItemCategory: "Appliances",
      ItemName: "Microwave Oven",
      ItemBrand: "Brand B",
      ItemColor: "Silver",
      ItemSerialNumber: "SN2345678901",
      ItemDescription: "Compact design with sensor cooking",
    },
    {
      ID: 3,
      ItemCategory: "Furniture",
      ItemName: "Office Chair",
      ItemBrand: "Brand C",
      ItemColor: "Blue",
      ItemSerialNumber: "SN3456789012",
      ItemDescription: "Ergonomic design for comfort",
    },
    {
      ID: 4,
      ItemCategory: "Clothing",
      ItemName: "T-Shirt",
      ItemBrand: "Brand D",
      ItemColor: "Red",
      ItemSerialNumber: "SN4567890123",
      ItemDescription: "100% cotton, available in various sizes",
    },
    {
      ID: 5,
      ItemCategory: "Electronics",
      ItemName: "Laptop",
      ItemBrand: "Brand E",
      ItemColor: "Grey",
      ItemSerialNumber: "SN5678901234",
      ItemDescription: "Lightweight and powerful performance",
    },
    {
      ID: 6,
      ItemCategory: "Appliances",
      ItemName: "Blender",
      ItemBrand: "Brand F",
      ItemColor: "Green",
      ItemSerialNumber: "SN6789012345",
      ItemDescription: "High-speed blending, easy to clean",
    },
    {
      ID: 7,
      ItemCategory: "Furniture",
      ItemName: "Dining Table",
      ItemBrand: "Brand G",
      ItemColor: "Brown",
      ItemSerialNumber: "SN7890123456",
      ItemDescription: "Made from solid wood, seats six",
    },
    {
      ID: 8,
      ItemCategory: "Clothing",
      ItemName: "Jeans",
      ItemBrand: "Brand H",
      ItemColor: "Blue",
      ItemSerialNumber: "SN8901234567",
      ItemDescription: "Stylish and durable denim",
    },
    {
      ID: 9,
      ItemCategory: "Electronics",
      ItemName: "Headphones",
      ItemBrand: "Brand I",
      ItemColor: "Black",
      ItemSerialNumber: "SN9012345678",
      ItemDescription: "Noise-canceling, wireless",
    },
    {
      ID: 10,
      ItemCategory: "Appliances",
      ItemName: "Toaster",
      ItemBrand: "Brand J",
      ItemColor: "White",
      ItemSerialNumber: "SN0123456789",
      ItemDescription: "Four-slice toaster with browning control",
    },
    {
      ID: 11,
      ItemCategory: "Furniture",
      ItemName: "Sofa",
      ItemBrand: "Brand K",
      ItemColor: "Gray",
      ItemSerialNumber: "SN1234567891",
      ItemDescription: "Comfortable with modern design",
    },
    {
      ID: 12,
      ItemCategory: "Clothing",
      ItemName: "Jacket",
      ItemBrand: "Brand L",
      ItemColor: "Black",
      ItemSerialNumber: "SN2345678902",
      ItemDescription: "Waterproof, perfect for winter",
    },
    {
      ID: 13,
      ItemCategory: "Electronics",
      ItemName: "Smartwatch",
      ItemBrand: "Brand M",
      ItemColor: "Gold",
      ItemSerialNumber: "SN3456789013",
      ItemDescription: "Fitness tracking and notifications",
    },
    {
      ID: 14,
      ItemCategory: "Appliances",
      ItemName: "Vacuum Cleaner",
      ItemBrand: "Brand N",
      ItemColor: "Red",
      ItemSerialNumber: "SN4567890124",
      ItemDescription: "Powerful suction with multiple settings",
    },
    {
      ID: 15,
      ItemCategory: "Furniture",
      ItemName: "Bed Frame",
      ItemBrand: "Brand O",
      ItemColor: "White",
      ItemSerialNumber: "SN5678901235",
      ItemDescription: "Queen size with storage underneath",
    },
    {
      ID: 16,
      ItemCategory: "Clothing",
      ItemName: "Hoodie",
      ItemBrand: "Brand P",
      ItemColor: "Navy",
      ItemSerialNumber: "SN6789012346",
      ItemDescription: "Soft fabric, perfect for layering",
    },
    {
      ID: 17,
      ItemCategory: "Electronics",
      ItemName: "Tablet",
      ItemBrand: "Brand Q",
      ItemColor: "Silver",
      ItemSerialNumber: "SN7890123457",
      ItemDescription: "10-inch display with long battery life",
    },
    {
      ID: 18,
      ItemCategory: "Appliances",
      ItemName: "Coffee Maker",
      ItemBrand: "Brand R",
      ItemColor: "Black",
      ItemSerialNumber: "SN8901234568",
      ItemDescription: "Brew strength control and programmable",
    },
    {
      ID: 19,
      ItemCategory: "Furniture",
      ItemName: "Bookshelf",
      ItemBrand: "Brand S",
      ItemColor: "Walnut",
      ItemSerialNumber: "SN9012345679",
      ItemDescription: "5-tier design, holds up to 100 books",
    },
    {
      ID: 20,
      ItemCategory: "Clothing",
      ItemName: "Sneakers",
      ItemBrand: "Brand T",
      ItemColor: "White",
      ItemSerialNumber: "SN0123456780",
      ItemDescription: "Lightweight with breathable material",
    },
    {
      ID: 21,
      ItemCategory: "Electronics",
      ItemName: "Speaker",
      ItemBrand: "Brand U",
      ItemColor: "Black",
      ItemSerialNumber: "SN1234567892",
      ItemDescription: "Clear audio, comfortable fit",
    },
    {
      ID: 22,
      ItemCategory: "Appliances",
      ItemName: "Oven",
      ItemBrand: "Brand V",
      ItemColor: "Red",
      ItemSerialNumber: "SN2345678903",
      ItemDescription: "Thermal cooking, adjustable temperature",
    },
    {
      ID: 23,
      ItemCategory: "Furniture",
      ItemName: "Cabinet",
      ItemBrand: "Brand W",
      ItemColor: "Black",
      ItemSerialNumber: "SN3456789014",
      ItemDescription: "Sturdy, easy to store items",
    },
    {
      ID: 24,
      ItemCategory: "Clothing",
      ItemName: "Pants",
      ItemBrand: "Brand X",
      ItemColor: "Blue",
      ItemSerialNumber: "SN4567890125",
      ItemDescription: "Comfortable and breathable material",
    },
    {
      ID: 25,
      ItemCategory: "Electronics",
      ItemName: "Smart Tv",
      ItemBrand: "Brand Y",
      ItemColor: "White",
      ItemSerialNumber: "SN5678901236",
      ItemDescription: "4K Ultra HD, smart features",
    },
    {
      ID: 26,
      ItemCategory: "Appliances",
      ItemName: "Refrigerator",
      ItemBrand: "Brand Z",
      ItemColor: "Silver",
      ItemSerialNumber: "SN6789012347",
      ItemDescription: "Energy-efficient, perfect for cold weather",
    },
    {
      ID: 27,
      ItemCategory: "Furniture",
      ItemName: "Sofa Set",
      ItemBrand: "Brand AA",
      ItemColor: "Gray",
      ItemSerialNumber: "SN7890123458",
      ItemDescription: "Two sofas, perfect for couples",
    },
    {
      ID: 28,
      ItemCategory: "Clothing",
      ItemName: "Shirt",
      ItemBrand: "Brand BB",
      ItemColor: "White",
      ItemSerialNumber: "SN8901234569",
      ItemDescription: "Comfortable and breathable material",
    },
    {
      ID: 29,
      ItemCategory: "Electronics",
      ItemName: "Air Conditioner",
      ItemBrand: "Brand CC",
      ItemColor: "Black",
      ItemSerialNumber: "SN9012345670",
      ItemDescription: "Comfortable, energy-efficient",
    },
    {
      ID: 30,
      ItemCategory: "Appliances",
      ItemName: "Washing Machine",
      ItemBrand: "Brand DD",
      ItemColor: "Red",
      ItemSerialNumber: "SN0123456781",
      ItemDescription: "High-efficiency, perfect for laundry",
    },
    {
      ID: 31,
      ItemCategory: "Furniture",
      ItemName: "Dining Table",
      ItemBrand: "Brand EE",
      ItemColor: "Black",
      ItemSerialNumber: "SN1234567893",
      ItemDescription: "Comfortable, adjustable height",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [timeoutId, setTimeoutId] = useState(null);
  const itemsPerPage = 10;

  const handleSearchForm = (event) => {
    event.preventDefault();
    const searchValue = event.target.value.toLowerCase();
    setSearchQuery(searchValue);

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const id = setTimeout(() => {
      const filteredData = data.filter((item) =>
        Object.values(item).some((val) =>
          String(val).toLocaleLowerCase().includes(searchValue)
        )
      );
      if (searchValue && filteredData.length === 0) {
        alert("No items found");
        setSearchQuery("");
      }
    }, 1000);

    setTimeoutId(id);
    setCurrentPage(1);
    console.log(searchValue);
  };

  const filteredItems = data.filter((item) =>
    Object.values(item).some((val) =>
      String(val).toLowerCase().includes(searchQuery)
    )
  );

  const displayedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Modals
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Add New Item"
        body={<BodyModals />}
      />

      <Row>
        <Col xs={12} md={8} lg={8}>
          <h1>List of Items</h1>
        </Col>
        <Col xs={12} md={4} lg={4}>
          <SearchForm onChange={handleSearchForm} value={searchQuery} />
        </Col>
      </Row>
      <hr></hr>
      <Table responsive striped bordered hover className="my-5 no-wrap">
        <thead>
          <tr>
            <th>ID</th>
            <th>Item Category</th>
            <th>Item Name</th>
            <th>Item Brand</th>
            <th>Item Color</th>
            <th>Item Serial Number</th>
            <th>Item Description</th>
          </tr>
        </thead>
        <tbody>
          {displayedItems.map((item, index) => (
            <tr key={index}>
              <td>{item.ID}</td>
              <td>{item.ItemCategory}</td>
              <td>{item.ItemName}</td>
              <td>{item.ItemBrand}</td>
              <td>{item.ItemColor}</td>
              <td>{item.ItemSerialNumber}</td>
              <td>{item.ItemDescription}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.First
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        />

        {Array.from({ length: pageCount }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}

        <Pagination.Next
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === pageCount}
        />
        <Pagination.Last
          onClick={() => handlePageChange(pageCount)}
          disabled={currentPage === pageCount}
        />
      </Pagination>

      <div className="position-absolute z-1">
        <div
          className="position-fixed bottom-0 end-0 mb-3 me-3 transparent-button"
          onClick={() => setShowModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z" />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Items;
