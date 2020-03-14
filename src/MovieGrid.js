import React from "react";
import { GoPrimitiveDot } from "react-icons/go";

export default function MovieGrid(props) {
  let { movieList } = props;

  function getTorrentHealth(seeds, peers) {
    if (seeds > peers) return "#f44336";
    if (seeds === peers) return "#ffeb3b";
    if (seeds < peers) return "#4caf50";
  }
  return (
    <div className="flex flex-justify-space-between mt-20 flex-wrap">
      {movieList.movies &&
        movieList.movies.map(movie => {
          let avgSeeds = 0,
            totalSeeds = 0,
            avgPeers = 0,
            totalPeers = 0;

          movie.torrents.forEach(torrent => {
            totalSeeds += torrent.seeds;
            totalPeers += torrent.peers;
          });

          avgSeeds = totalSeeds / movie.torrents.length;
          avgPeers = totalPeers / movie.torrents.length;
          let health = getTorrentHealth(avgSeeds, avgPeers);

          let movieGenre = movie.genres[0] + " / " + movie.genres[1];
          return (
            <div className="flex flex-column movie-card mb-20" key={movie.id}>
              <div className="mb-20">
                <img className="cover-img" src={movie.large_cover_image} />
              </div>
              <div>
                <div className="flex flex-justify-space-between">
                  <h3 className="movie-card-title">{movie.title}</h3>
                  <GoPrimitiveDot style={{ fontSize: 30, color: health }} />
                </div>
                <div className="flex flex-justify-space-between">
                  <p>{movie.year}</p>
                  <p>{movieGenre}</p>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}
