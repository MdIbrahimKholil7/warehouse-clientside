import React from 'react';
import { FaFacebook, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';
import team1 from '../../../img/team1.jpg'
import team2 from '../../../img/team2.jpg'
import team3 from '../../../img/team3.jpg'
import team4 from '../../../img/team4.jpg'
import team5 from '../../../img/team5.jpg'
import team6 from '../../../img/team6.jpg'
import team7 from '../../../img/team7.jpg'
import team8 from '../../../img/team8.jpg'
import './Team.css'
const Team = () => {

    const team = [
        { name: 'Michale Cole', work: 'Transport Coordinator', id: 1, img: team1 },
        { name: 'John Carter', work: 'Logistic Specalist', id: 2, img: team2 },
        { name: 'Julie Palmer', work: 'Shift Manager', id: 3, img: team3 },
        { name: 'Linda Marin', work: 'Sales Manger', id: 4, img: team4 },
        { name: 'Mary Joe', work: 'Manager', id: 5, img: team5 },
        { name: 'John Doe', work: 'Goods Manager', id: 6, img: team6 },
        { name: 'Mary Lucas', work: 'Supervisor', id: 7, img: team7 },
        { name: 'Joe John', work: 'General Manager', id: 8, img: team8 },
    ]


    return (
        <div className='team-container'>
            <div className='container'>
                <section>
                    <h1 className='text-uppercase text-center py-5 fw-bold title1 '>Our Team</h1>
                    <div className='row g-5 team-details-container'>
                        {
                            team.map(item =>

                                <div
                                key={item.id} 
                                    className=' col-md-4 col-lg-3 col-12 employ-details'
                                    >
                                    <div className='img'>
                                        <img className='' src={item.img} alt={item.name} />

                                        <div className='d-flex mb-md-0 mb-3 pb-4 pb-md-1 social-container'>
                                            <FaFacebook className='social-icon' />
                                            <FaTwitterSquare className='social-icon' />
                                            <FaInstagramSquare className='social-icon' />
                                        </div>
                                    </div>
                                    <div className='detail'>
                                        <h1>{item.name}</h1>
                                        <h3>{item.work}</h3>
                                        <div className='d-flex justify-content-end'>
                                            <div className='bottom-border'></div>
                                        </div>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Team;