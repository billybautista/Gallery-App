export const PROFILE = {
  name: 'John Doe',
  email: 'john@doe.com',
  photo:
    'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

export const EMPTY_MESSAGE = {
  favorite: 'You have no favorite',
  search: 'No results found',
};

export const handleUrl = (id: number) => {
  return `https://www.artic.edu/artworks/${id}`;
};

export const handleShare = (title: string, id: number) => {
  return `Check out this work of art: ${title}. More information at: ${handleUrl(id)}`;
};

export const DETAIL_SCREEN_ITEMS = [
  { key: 'Artist', value: 'artist_title' },
  { key: 'Place', value: 'place_of_origin' },
  { key: 'Date', value: 'date_start' },
  { key: 'Medium', value: 'medium_display' },
  { key: 'Dimensions', value: 'dimensions' },
  { key: 'Credit Line', value: 'credit_line' },
  { key: 'Reference Number', value: 'main_reference_number' },
];

export const HEADERS = {
  favorite: 'Favorites',
  home: 'Home',
};
