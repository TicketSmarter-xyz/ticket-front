import React from "react";
import "./event-card.styles.css";

const EventCard = ({event}) => {

    return (
        <div key={event.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={event.imageUrl} alt="" />
                </div>
                <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    {/* <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p> */}
                    <a href={event.href} className="block mt-2">
                      <div className="mt-6 flex items-center event-info">
                        <p className="text-xl font-semibold text-gray-900 artist">{event.artist}</p>
                        <p className="startin-at">Starting at</p>
                      </div>
                      <div className="mt-6 flex items-center event-info">
                        <div className="ml-3 venue-date">
                            <p className="mt-3 text-base text-gray-500 venue">{event.venue}</p>
                            <p className="mt-3 text-base text-gray-500 date">{event.date}</p>
                        </div>
                            <p className="mt-3 text-base text-gray-500 price">{event.price}</p>
                      </div>
                    </a>
                  </div>
                  {/* <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={event.date} className="hover:underline">
                          {event.venue}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                        <span aria-hidden="true">&middot;</span>
                      </div>
                    </div>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time>{event.price}</time>
                            <span aria-hidden="true">&middot;</span>
                        </div>
                    <div className="flex-shrink-0">
                      <div>
                        <span className="sr-only">{event.price}</span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
    )

}

export default EventCard;