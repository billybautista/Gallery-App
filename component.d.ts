interface IArtwork {
  id: number;
  api_link: string;
  title: string;
  date_start: number;
  date_display: string;
  artist_display: string;
  place_of_origin: string;
  description: string | null;
  dimensions: string;
  medium_display: string;
  credit_line: string;
  artist_title: string;
  image_id: string;
  main_reference_number: string;
}

interface IFavorite {
  id: number;
  title: string;
  artist_title: string;
  image_id: string;
  api_link: string;
}
