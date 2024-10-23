import { Table, Form } from "react-bootstrap";
import Modals from "../components/modals";
import { useState } from "react";
const Items = () => {
  const [showModal, setShowModal] = useState(false);
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
  ];

  const bodyModal = () => {
    return (
      <>
        <Form>
          <Form.Group controlId="itemName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Item Name" />
          </Form.Group>
        </Form>
      </>
    );
  };

  return (
    <>
      <div>
        <button onClick={() => setShowModal(true)}>Add Item</button>
        <Modals
          show={showModal}
          onClose={() => setShowModal(false)}
          title="Hello World"
          body={bodyModal()}
        />
      </div>

      <Table responsive striped bordered hover>
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
          {data.map((item, index) => (
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
    </>
  );
};

export default Items;
