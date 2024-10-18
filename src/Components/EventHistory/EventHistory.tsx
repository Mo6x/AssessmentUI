import React, { useState } from "react";
import styles from "./EventHistory.module.css";


interface Event {
  name: string;
  date: string;
  speaker: string;
  status: string;
}

export const EventHistory: React.FC = () => {
  const [search, setSearch] = useState('');
  const [sort, setSort] = useState('Most Recent');
  const [statusFilter, setStatusFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  const events: Event[] = [
    { name: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
    { name: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
    { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'Completed' },
    { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'Completed' },
    { name: 'Data Analytics in Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'Completed' },
    // Add more events...
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredEvents = events
    .filter(event =>
      event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.speaker.toLowerCase().includes(search.toLowerCase())
    )
    .filter(event => (statusFilter ? event.status === statusFilter : true))
    .filter(event => (nameFilter ? event.speaker.includes(nameFilter) : true))
    .filter(event => (dateFilter ? event.date === dateFilter : true));

  return (
    <div className={styles.eventHistoryContainer}>
       <h2>Events History</h2>
      <div className={styles.header}>
        <div className={styles.controls}>
          <input type="search" placeholder="Search..."
            value={search}
            onChange={handleSearch}
            className={styles.searchInput}
          />
          
          <select className={styles.filterSelect} value={dateFilter} onChange={(e) => setDateFilter(e.target.value)}>
            <option value="">Date</option>
            {events.map((event, index) => (
              <option key={index} value={event.date}>{event.date}</option>
            ))}
          </select>

          <select className={styles.filterSelect} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">Status</option>
            <option value="Completed">Completed</option>
            <option value="In Progress">In Progress</option>
          </select>

          <select className={styles.filterSelect} value={nameFilter} onChange={(e) => setNameFilter(e.target.value)}>
            <option value="">Name</option>
            {events.map((event, index) => (
              <option key={index} value={event.speaker}>{event.speaker}</option>
            ))}
          </select>

          <span>Displaying {filteredEvents.length} results</span>
          
          <div className="">

          <select className={styles.sortSelect} value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="Most Recent">Most Recent</option>
            <option value="Oldest">Oldest</option>
          </select>
          <button className={styles.exportBtn}>Export</button>
          </div>
        </div>

      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>Event Name</th>
            <th>Date</th>
            <th>Speaker</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredEvents.map((event, index) => (
            <tr key={index}>
              <td>{event.name}</td>
              <td>{event.date}</td>
              <td>{event.speaker}</td>
              <td>
                <span className={`${styles.status} ${styles[event.status.replace(' ', '').toLowerCase()]}`}>
                  {event.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={styles.pagination}>
        <div className={styles.pageControls}>
          <button>{'<'}</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>{'>'}</button>
        </div>
        <div>
          <label>Show:</label>
          <select>
            <option value="10">10 rows</option>
            <option value="25">25 rows</option>
            <option value="50">50 rows</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default EventHistory;
