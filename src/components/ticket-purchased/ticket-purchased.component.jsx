/* This example requires Tailwind CSS v2.0+ */
import React, { useEffect, useState } from 'react'
import { CheckCircleIcon } from '@heroicons/react/solid'
import "./ticket-purchased.styles.css"


const includedFeatures = [
  'Access to the live event',
  '10% off all merchandise',
  'NFT drop during the show',
  'Early access to the new album',
]




export default function TicketPurchased() {
    const events = [
        {
          id: 1,
          artist: 'Bad Bunny',
          href: '#',
          venue:
            'The Oracle Theatre',
          date: 'Aug 25',
          datetime: '2020-03-16',
          imageUrl:
            'https://www.latercera.com/resizer/8jszNkpE6JS1YVrdlnEeTmnJ4FE=/900x600/smart/cloudfront-us-east-1.images.arcpublishing.com/copesa/55VAQB4IB5F7LAAINOREPWJNAI.jpg',
          price: "$80"
        },
        {
          id: 2,
          artist: 'Molotov',
          href: '#',
          venue:
            'Teatro Metropolitan',
          date: 'Aug 30',
          datetime: '2020-03-16',
          imageUrl:
            'data:image/jpeg;base64,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',
          price: "$65"
        },
        {
          id: 3,
          artist: 'Dua Lipa',
          href: '#',
          venue:
            'Foro Sol',
          date: 'Sep 15, 2020',
          datetime: '2020-03-16',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7noL1UERi-0mZhTOtDiMufe8uZQu24HOO6g&usqp=CAU',
          price: "$120"
        },
        {
          id: 4,
          artist: 'Muse',
          href: '#',
          venue:
            'Palacio de los Deportes',
          date: 'Sep 25',
          datetime: '2020-03-16',
          imageUrl:
            'data:image/jpeg;base64,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',
          price: "$70"
        },
      ]
    const [selectedEvent, setSelectedEvent] = useState({})

    useEffect(() => {
        let eventId = window.location.href;
        eventId = eventId.substring(22,23);
        console.log(eventId);
        console.log(events);
        let event = events.filter((item)=> {
            return item.id == eventId;
        })[0];
        console.log(event);
        setSelectedEvent(event);
    }, []);


  return (
    <div className="bg-gray-100">
      <div className="pt-12 sm:pt-16 lg:pt-20 background-ticket">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " >
        <div className="text-center">
            {/* <p className='artist-ticket'>Bad Bunny </p> */}
            <h2 className="text-3xl tracking-tight font-bold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl lg:tracking-tight artist-ticket">
              
            </h2>
            {/* <p className="mt-4 text-xl text-gray-600">
              If you're not satisfied, contact us within the first 14 days and we'll send you a full refund.
            </p> */}
          </div>
        </div>
      </div>
      
      <div className="mt-8 pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-100" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 px-6 py-8 lg:p-12 head-container">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">Bad Bunny</h3>
                <div className="ticket-details-main-container">
                    <div className='ticket-details-container'>
                        <p className="mt-6 text-base text-black-500 ticket-detail-1">
                        800
                        </p>
                        <p className="mt-6 text-base text-black-500 ticket-detail-2">
                        Tickets
                        </p>
                    </div>
                    <div className='ticket-details-container'>
                        <p className="mt-6 text-base text-black-500 ticket-detail-1">
                        703
                        </p>
                        <p className="mt-6 text-base text-black-500 ticket-detail-2">
                        Owners
                        </p>
                    </div>
                    <div className='ticket-details-container'>
                        <p className="mt-6 text-base text-black-500 ticket-detail-1">
                        August 25, 2022
                        </p>
                        <p className="mt-6 text-base text-black-500 ticket-detail-2">
                        Date of the show
                        </p>
                    </div>
                </div>
                {/* <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-base font-semibold text-indigo-600 whats-included">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-black-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div> */}
              </div>
              
            </div>
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="flex-1 bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight">General Ticket</h3>
                <p className="mt-6 text-base text-gray-500">
                  Get full access to Bad Bunny hottest tour
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-base font-semibold text-indigo-600 whats-included">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul role="list" className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
                    {includedFeatures.map((feature) => (
                      <li key={feature} className="flex items-start lg:col-span-1">
                        <div className="flex-shrink-0">
                          <CheckCircleIcon className="h-5 w-5 text-black-400" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{feature}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12 background-price">
                <p className="text-lg leading-6 font-medium text-gray-900 text-ticket">Only 97 tickets left at this price</p>
                <div className="mt-4 flex items-center justify-center text-5xl tracking-tight font-bold text-gray-900">
                  <span className="text-ticket">$80</span>
                  <span className="ml-3 text-xl font-medium text-gray-500 tracking-normal text-ticket">USD</span>
                </div>
                {/* <p className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-500 underline text-ticket">
                    Learn about our membership policy
                  </a>
                </p> */}
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 buy-ticket"
                    >
                      Buy ticket
                    </a>
                  </div>
                </div>
                <div className="mt-4 text-sm">
                  <a href="#" className="font-medium text-gray-900 text-ticket">
                    Refunds and secondary sales 
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}