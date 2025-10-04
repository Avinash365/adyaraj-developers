'use client';

import React, { useState, useEffect } from 'react';

const YOUTUBE_API_KEY = 'YOUR_API_KEY';
const VIDEOS_PLAYLIST_ID = 'YOUR_VIDEOS_PLAYLIST_ID';
const EVENTS_PLAYLIST_ID = 'YOUR_EVENTS_PLAYLIST_ID';

// ------------------ FilterTabs Component ------------------
function FilterTabs({ activeFilter, onFilterChange }) {
  const filters = [
    { id: 'videos', label: 'Awards & Certifications', emoji: '🏆' },
    { id: 'photos', label: 'Photos', emoji: '📸' },
  ];

  return (
    <div className="bg-gray-50 py-8" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Construction{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Browse through our ongoing and completed construction projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => onFilterChange(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span>{filter.emoji}</span>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ------------------ PhotoGrid Component ------------------
function PhotoGrid({ activeFilter }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [videosPlaylist, setVideosPlaylist] = useState([]);
  const [eventsPlaylist, setEventsPlaylist] = useState([]);

  const fetchPlaylist = async (playlistId, setState) => {
    try {
      const res = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=20&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`
      );
      const data = await res.json();
      if (data.items) {
        const videos = data.items.map((item) => ({
          id: `video-${item.snippet.resourceId.videoId}`,
          src: item.snippet.thumbnails.high.url,
          title: item.snippet.title,
          description: item.snippet.description,
          type: 'video',
          videoUrl: `https://www.youtube.com/embed/${item.snippet.resourceId.videoId}`,
        }));
        setState(videos);
      }
    } catch (error) {
      console.error('Error fetching playlist:', error);
    }
  };

  useEffect(() => {
    fetchPlaylist(VIDEOS_PLAYLIST_ID, setVideosPlaylist);
    fetchPlaylist(EVENTS_PLAYLIST_ID, setEventsPlaylist);
  }, []);

  // Static construction photos
  const photos = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1599792929266-6474c09d5d6e',
      alt: 'Construction Site 1',
      type: 'photo',
    },
    {
      id: '2',
      src: 'https://images.unsplash.com/photo-1600585154340-be6161b89f40',
      alt: 'Construction Site 2',
      type: 'photo',
    },
    {
      id: '3',
      src: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
      alt: 'Construction Machinery',
      type: 'photo',
    },
    {
      id: '4',
      src: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5',
      alt: 'Team Working',
      type: 'photo',
    },
  ];

  const getFilteredItems = () => {
    switch (activeFilter) {
      case 'videos':
        return videosPlaylist;
      case 'events':
        return eventsPlaylist;
      case 'photos':
        return photos;
      default:
        return [];
    }
  };

  const filteredItems = getFilteredItems();

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {filteredItems.length === 0 ? (
          <p className="text-center text-gray-500">No items available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="aspect-w-4 aspect-h-3 relative">
                  <img
                    src={item.src}
                    alt={item.alt || item.title}
                    className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black/50 rounded-full p-4">
                        <div className="w-8 h-8 flex items-center justify-center text-white text-2xl">
                          ▶️
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {selectedItem && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-hidden">
            <div className="relative">
              {selectedItem.type === 'video' ? (
                <div className="aspect-video">
                  <iframe
                    src={selectedItem.videoUrl}
                    className="w-full h-full"
                    allowFullScreen
                    title={selectedItem.title}
                  />
                </div>
              ) : (
                <img
                  src={selectedItem.src}
                  alt={selectedItem.alt}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
              )}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 bg-white/90 rounded-full p-2 hover:bg-white transition-colors cursor-pointer"
              >
                ✖️
              </button>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-900">{selectedItem.title}</h3>
              <p className="text-gray-600">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ------------------ Main ConstructionGallery Component ------------------
export default function ConstructionGallery() {
  const [activeFilter, setActiveFilter] = useState('videos'); // default to videos

  return (
    <div className="w-full bg-white">
      <FilterTabs activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <PhotoGrid activeFilter={activeFilter} />
    </div>
  );
}
