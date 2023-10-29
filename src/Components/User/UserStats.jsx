import React from 'react';
import Head from '../Helper/Head';
import useFetch from '../../Hooks/useFetch';
import { STATS_GET } from '../../Api';
import Loading from '../Helper/Loading';
import ErrorMessage from '../Helper/ErrorMessage';
const UserStatsGraphs = React.lazy(() => import('./UserStatsGraphs'));

function UserStats() {
  const { data, error, loading, request } = useFetch();
  const token = window.localStorage.getItem('token');

  React.useEffect(() => {
    async function fetchUserStats() {
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    fetchUserStats();
  }, [request, token]);

  if (error) return <ErrorMessage error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head
          title="Estatísticas"
          description="Página de estatísticas do usuário do site Dogs."
        />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  return null;
}

export default UserStats;
