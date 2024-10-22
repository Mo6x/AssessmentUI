import React, { useState } from "react";
import Download from "../../assets/download.svg";
import DotImage from "../../assets/dotbutton.svg";
import styles from "./EventHistory.module.css";
import UserModal from "../Dashboards/Details/User";


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
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5); 
  const [currentPage, setCurrentPage] = useState(1);

  const [events, setEvents] = useState<Event[]>([
    { name: 'Cloud Innovation Summit', date: '2024-10-15', speaker: 'Jane Doe', status: 'Completed' },
    { name: 'Blockchain Revolution Conference', date: '2024-11-05', speaker: 'Dr. Peter Smith', status: 'In Progress' },
    { name: 'AI in Healthcare Symposium', date: '2024-12-01', speaker: 'Dr. Aisha Malik', status: 'Completed' },
    { name: 'Future of Fintech Forum', date: '2024-10-25', speaker: 'John Lee', status: 'Completed' },
    { name: 'Data Analytics in Business', date: '2024-11-12', speaker: 'Rachel Moore', status: 'Completed' },
    { name: 'Sustainable Energy Expo', date: '2024-09-28', speaker: 'Prof. Alan Green', status: 'Completed'},
    { name: 'Web3 Interfaces Workshop', date: '2024-10-10', speaker: 'Kevin Adams', status: 'In Progress' },
    { name: 'Cybersecurity for Startups', date: '2024-11-19', speaker: 'Emily Zhang', status: 'Completed' },
    { name: 'Smart Cities Forum', date: '2024-10-18', speaker: 'Dr. Maria Hernandez', status: 'In Progress' },
    { name: 'Tech Safari Mixer', date: '2024-09-30', speaker: 'Guest Panel', status: 'In Progress' },
    { name: 'Software Engineer', date: '2024-18-20', speaker: 'Christopher Moses', status: 'Completed' },
    // Add more events...
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleExportClick = (event: Event) => {
    setSelectedEvent(event); 
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
    setSelectedEvent(null); 
  };

  const handleDeleteEvent = () => {
    if (selectedEvent) {
      setEvents(prevEvents => prevEvents.filter(event => event !== selectedEvent));
      closeModal();
    }
  };

  const filteredEvents = events
    .filter(event =>
      event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.speaker.toLowerCase().includes(search.toLowerCase())
    )
    .filter(event => (statusFilter ? event.status === statusFilter : true))
    .filter(event => (nameFilter ? event.speaker.includes(nameFilter) : true))
    .filter(event => (dateFilter ? event.date === dateFilter : true));

  const sortedEvents = [...filteredEvents].sort((a, b) => {
    if (sort === 'Most Recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    }
  });

  const totalPages = Math.ceil(sortedEvents.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedEvents = sortedEvents.slice(startIndex, endIndex);

  return (
    <div className={styles.eventHistoryContainer}>
      <h2 className={styles.h2container}>Events History</h2>
      <div className={styles.header}>
        <div className={styles.headerUtems}>
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
          </div>

          <div className={styles.sortbuttoncontainer}>
            <span className={styles.sortselect}>Sort:</span>
            <select className={styles.sortSelect} value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="Most Recent">Most Recent</option>
              <option value="Oldest">Oldest</option>
            </select>
            <img src={DotImage} alt="Dot icon" />
            <div className={styles.dowloadbuttoncontainer}>
              <img src={Download} alt="download icon" className={styles.dowloadIcon} />
              <button 
                className={styles.exportBtn}
                onClick={() => selectedEvent && handleExportClick(selectedEvent)}
              >
                Export
              </button>
            </div>
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
          {paginatedEvents.map((event, index) => (
            <tr key={index} onClick={() => setSelectedEvent(event)}>
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
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>{'<'}</button>
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)} className={currentPage === index + 1 ? styles.activePage : ''}>
              {index + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>{'>'}</button>
        </div>
        <div>
          <label>Show:</label>
          <select value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
            <option value="5">5 rows</option>
            <option value="10">10 rows</option>
            <option value="15">15 rows</option>
          </select>
        </div>
      </div>

      {isModalOpen && selectedEvent && (
        <UserModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          event={selectedEvent} 
          onDelete={handleDeleteEvent} 
        />
      )}
    </div>
  );
};

export default EventHistory;
