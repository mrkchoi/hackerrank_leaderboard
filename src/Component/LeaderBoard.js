import React, { useMemo } from 'react';
import { response } from '../response';

import { useParams, Link } from 'react-router-dom';

const SORTKEY = {
  RANK: 'rank',
  NAME: 'name',
  POINTS: 'points',
  AGE: 'age',
};

function LeaderBoard(props) {
  const data = response['list'];
  const { sortKey } = useParams();

  const sortedData = useMemo(() => {
    if (!sortKey) return data;

    return data.sort((a, b) => {
      if (sortKey === SORTKEY.RANK) {
        if (Number(a.rank) < Number(b.rank)) return -1;
        return 1;
      } else if (sortKey === SORTKEY.NAME) {
        if (a.name < b.name) return -1;
        return 1;
      } else if (sortKey === SORTKEY.POINTS) {
        if (Number(a.points) < Number(b.points)) return -1;
        return 1;
      } else if (sortKey === SORTKEY.AGE) {
        if (Number(a.age) < Number(b.age)) {
          return -1;
        } else if (Number(a.age) > Number(b.age)) {
          return 1;
        } else {
          if (Number(a.rank) < Number(b.rank)) return -1;
          return 1;
        }
      } else {
        return -1;
      }
    });
  }, [data, sortKey]);

  return (
    <div className="text-center mt-50">
      <div>
        <div>
          <Link to="/rank">
            <button data-testid="route-rank" className="outlined" type="button">
              Rank
            </button>
          </Link>
          <Link to="/name">
            <button data-testid="route-name" className="outlined" type="button">
              Name
            </button>
          </Link>
          <Link to="/points">
            <button
              data-testid="route-points"
              className="outlined"
              type="button"
            >
              Points
            </button>
          </Link>
          <Link to="/age">
            <button data-testid="route-age" className="outlined" type="button">
              Age
            </button>
          </Link>
        </div>
      </div>
      <div className="card mx-auto pb-20 mb-30" style={{ width: '50%' }}>
        <table className="mt-50" data-testid="app-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th className="numeric">Points</th>
              <th className="numeric">Age</th>
            </tr>
          </thead>
          <tbody data-testid="app-tbody">
            {sortedData.map((row, idx) => (
              <tr key={row.rank}>
                <td data-testid={`rank-${idx}`}>{row.rank}</td>
                <td data-testid={`name-${idx}`}>{row.name}</td>
                <td data-testid={`points-${idx}`} className="numeric">
                  {row.points}
                </td>
                <td data-testid={`age-${idx}`} className="numeric">
                  {row.age}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default LeaderBoard;
