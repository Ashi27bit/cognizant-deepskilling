import React from 'react';

const heading = <h1>Office Space Rental Listings</h1>;

const office = {
  name: 'Cognizant Tech Park',
  rent: 75000,
  address: 'Chennai, Tamil Nadu'
};

const officeList = [
  { name: 'Cognizant Tech Park', rent: 75000, address: 'Chennai' },
  { name: 'DLF Cyber City', rent: 55000, address: 'Gurgaon' },
  { name: 'Manyata Tech Park', rent: 62000, address: 'Bengaluru' },
  { name: 'Hi-Tech City', rent: 48000, address: 'Hyderabad' }
];

function App() {
  return (
    <div>
      {heading}
      <img
        src="https://via.placeholder.com/300x150?text=Office+Space"
        alt="office space"
      />

      <h2>Featured Office</h2>
      <p>Name: {office.name}</p>
      <p>Address: {office.address}</p>
      <p style={{ color: office.rent < 60000 ? 'red' : 'green' }}>
        Rent: {office.rent}
      </p>

      <h2>All Listings</h2>
      <ul>
        {officeList.map((item, index) => (
          <li key={index}>
            {item.name} - {item.address} -{' '}
            <span style={{ color: item.rent < 60000 ? 'red' : 'green' }}>
              Rent: {item.rent}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
