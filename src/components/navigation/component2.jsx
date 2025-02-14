import "./navigation.css";
import { useNavigate } from "react-router";
import Button from "../button/component";
import { useEffect, useState } from "react";

export default function Navigation2() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setPage] = useState("match-flow")
  useEffect(() => {
    setPage(window.location.href.split("/").pop());
  }, [])
  return (
    
    <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>  
    <nav>
      <ul className="nav-list">
        <li>
          <a href="/dashboard" className={`nav-button ${currentPage === 'dashboard' ? 'active' : ''}`} onClick={() => setPage('dashboard')}>
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
              <path d="M520-600v-240h320v240H520ZM120-440v-400h320v400H120Zm400 320v-400h320v400H520Zm-400 0v-240h320v240H120Zm80-400h160v-240H200v240Zm400 320h160v-240H600v240Zm0-480h160v-80H600v80ZM200-200h160v-80H200v80Zm160-320Zm240-160Zm0 240ZM360-280Z" fill="white"/>
            </svg>
            Dashboard
          </a>
        </li>
        <li>
          <a href="/match-flow" className={`nav-button ${currentPage === 'match-flow' ? 'active' : ''}`} onClick={() => setPage('match-flow')}>
            <svg width="24" height="24" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.25 13.75V11.5H7.25V4H5.75V6.25H0.5V0.25H5.75V2.5H10.25V0.25H15.5V6.25H10.25V4H8.75V10H10.25V7.75H15.5V13.75H10.25Z" fill="white"/>
            </svg>
            Match Flow
          </a>
        </li>
        <li>
          <a href="/outbound" className={`nav-button ${currentPage === 'outbound' ? 'active' : ''}`} onClick={() => setPage('outbound')}>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.675 11.375L9.5 7.55V9.2375H11V5H6.7625V6.5H8.43125L4.625 10.3063L5.675 11.375ZM8 15.5C6.9625 15.5 5.9875 15.3031 5.075 14.9094C4.1625 14.5156 3.36875 13.9813 2.69375 13.3063C2.01875 12.6313 1.48438 11.8375 1.09063 10.925C0.696875 10.0125 0.5 9.0375 0.5 8C0.5 6.9625 0.696875 5.9875 1.09063 5.075C1.48438 4.1625 2.01875 3.36875 2.69375 2.69375C3.36875 2.01875 4.1625 1.48438 5.075 1.09063C5.9875 0.696875 6.9625 0.5 8 0.5C9.0375 0.5 10.0125 0.696875 10.925 1.09063C11.8375 1.48438 12.6313 2.01875 13.3063 2.69375C13.9813 3.36875 14.5156 4.1625 14.9094 5.075C15.3031 5.9875 15.5 6.9625 15.5 8C15.5 9.0375 15.3031 10.0125 14.9094 10.925C14.5156 11.8375 13.9813 12.6313 13.3063 13.3063C12.6313 13.9813 11.8375 14.5156 10.925 14.9094C10.0125 15.3031 9.0375 15.5 8 15.5ZM8 14C9.675 14 11.0938 13.4188 12.2563 12.2563C13.4188 11.0938 14 9.675 14 8C14 6.325 13.4188 4.90625 12.2563 3.74375C11.0938 2.58125 9.675 2 8 2C6.325 2 4.90625 2.58125 3.74375 3.74375C2.58125 4.90625 2 6.325 2 8C2 9.675 2.58125 11.0938 3.74375 12.2563C4.90625 13.4188 6.325 14 8 14Z" fill="white"/>
            </svg>
            Outbound
          </a>
        </li>
        <li>
        <a href="/pipeline" className={`nav-button ${currentPage === 'pipeline' ? 'active' : ''}`} onClick={() => setPage('pipeline')}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.25 15.75V11.25H9.75V12.75H15.75V14.25H9.75V15.75H8.25ZM2.25 14.25V12.75H6.75V14.25H2.25ZM5.25 11.25V9.75H2.25V8.25H5.25V6.75H6.75V11.25H5.25ZM8.25 9.75V8.25H15.75V9.75H8.25ZM11.25 6.75V2.25H12.75V3.75H15.75V5.25H12.75V6.75H11.25ZM2.25 5.25V3.75H9.75V5.25H2.25Z" fill="white"/>
</svg>
Pipeline
          </a>
        </li>
        <li>
        <a href="/events" className={`nav-button ${currentPage === 'events' ? 'active' : ''}`} onClick={() => setPage('events')}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 16.5C3.3375 16.5 2.98438 16.3531 2.69063 16.0594C2.39687 15.7656 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39687 3.73438 2.69063 3.44063C2.98438 3.14688 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0156 3.14688 15.3094 3.44063C15.6031 3.73438 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6031 15.7656 15.3094 16.0594C15.0156 16.3531 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6Z" fill="white"/>
</svg>
    Events
          </a>
        </li>




        <li>
        <a href="/doc_flow" className={`nav-button ${currentPage === 'doc_flow' ? 'active' : ''}`} onClick={() => setPage('doc_flow')}>
        <svg width="24" height="24" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 15.5C1.0875 15.5 0.734375 15.3531 0.440625 15.0594C0.146875 14.7656 0 14.4125 0 14V2C0 1.5875 0.146875 1.23438 0.440625 0.940625C0.734375 0.646875 1.0875 0.5 1.5 0.5H7.5L12 5V14C12 14.4125 11.8531 14.7656 11.5594 15.0594C11.2656 15.3531 10.9125 15.5 10.5 15.5H1.5ZM6.75 5.75V2H1.5V14H10.5V5.75H6.75Z" fill="white"/>
            </svg>
            Doc flow
          </a>
        </li>
 
        <li>
        <a href="/pitch_lab" className={`nav-button ${currentPage === 'pitch_lab' ? 'active' : ''}`} onClick={() => setPage('pitch_lab')}>
        <svg width="24" height="24" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.75 16.5C3.3375 16.5 2.98438 16.3531 2.69063 16.0594C2.39687 15.7656 2.25 15.4125 2.25 15V4.5C2.25 4.0875 2.39687 3.73438 2.69063 3.44063C2.98438 3.14688 3.3375 3 3.75 3H4.5V1.5H6V3H12V1.5H13.5V3H14.25C14.6625 3 15.0156 3.14688 15.3094 3.44063C15.6031 3.73438 15.75 4.0875 15.75 4.5V15C15.75 15.4125 15.6031 15.7656 15.3094 16.0594C15.0156 16.3531 14.6625 16.5 14.25 16.5H3.75ZM3.75 15H14.25V7.5H3.75V15ZM3.75 6H14.25V4.5H3.75V6Z" fill="white"/>
</svg>
Pitch  lab
          </a>
        </li>

        <li>
        <a href="/resources" className={`nav-button ${currentPage === 'resources' ? 'active' : ''}`} onClick={() => setPage('resources')}>
        <svg width="24" height="24" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.75 13.75C1.3375 13.75 0.984375 13.6031 0.690625 13.3094C0.396875 13.0156 0.25 12.6625 0.25 12.25V1.75C0.25 1.3375 0.396875 0.984375 0.690625 0.690625C0.984375 0.396875 1.3375 0.25 1.75 0.25H12.25C12.6625 0.25 13.0156 0.396875 13.3094 0.690625C13.6031 0.984375 13.75 1.3375 13.75 1.75V12.25C13.75 12.6625 13.6031 13.0156 13.3094 13.3094C13.0156 13.6031 12.6625 13.75 12.25 13.75H1.75ZM1.75 1.75V12.25H12.25V1.75H10.75V7L8.875 5.875L7 7V1.75H1.75Z" fill="white"/>
            </svg>
            Resources
          </a>
        </li>
     
    


      </ul>
    </nav>
  </aside>



   
  );
}
