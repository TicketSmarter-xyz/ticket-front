import React from "react";

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
                      <p className="text-xl font-semibold text-gray-900">{event.artist}</p>
                      <p className="mt-3 text-base text-gray-500">{event.venue}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={event.author.href} className="hover:underline">
                          {event.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={event.datetime}>{event.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{event.readingTime} read</span>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <a href={event.author.href}>
                        <span className="sr-only">{event.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={event.author.imageUrl} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
    )

}

export default EventCard;