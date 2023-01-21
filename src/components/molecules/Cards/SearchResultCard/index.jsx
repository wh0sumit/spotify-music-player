import React from "react";
import MusicCard from "../MusicCard";
export default function SearchResultCard({
  playlists,
  artists,
  albums,
  tracks,
}) {
  return (
    <>
      {playlists &&
        playlists.map((playlist) => (
          <MusicCard
            key={playlist?.id}
            id={playlist?.id}
            name={playlist?.name}
            image={playlist?.images[0]?.url}
            owner={playlist?.owner?.display_name}
            type="Playlist"
          />
        ))}
      {artists &&
        artists.map((artist) => (
          <MusicCard
            key={artist?.id}
            id={artist?.id}
            name={artist?.name}
            image={artist?.images[0]?.url}
            type="Artist"
          />
        ))}
      {albums &&
        albums.map((album) => (
          <MusicCard
            key={album?.id}
            id={album?.id}
            name={album?.name}
            image={album?.images[0]?.url}
            type="Album"
          />
        ))}
      {tracks &&
        tracks.map((track) => (
          <MusicCard
            key={track?.id}
            id={track?.id}
            name={track?.name}
            image={track?.album.images[0]?.url}
            artist={track?.artists.map((artist) => artist.name)}
            type="Track"
          />
        ))}
    </>
  );
}

