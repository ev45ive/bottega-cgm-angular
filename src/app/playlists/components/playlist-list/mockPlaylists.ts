import { Playlist } from "./Playlist";

export const mockPlaylists: Playlist[] = [
  {
    id: '123',
    name: 'Playlist 123',
    public: true,
    description: 'Awesome playlsit',
  },
  {
    id: '234',
    name: 'Playlist 234',
    public: false,
    description: 'Best playlsit',
  },
  {
    id: '345',
    name: 'Playlist 345',
    public: true,
    description: 'Cool playlsit',
  },
];

// type Playlist = (typeof mockPlaylists)[0];

// mockPlaylists[0].placki = 123
