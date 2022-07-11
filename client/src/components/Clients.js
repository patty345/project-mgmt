import { gql, useQuery } from "@apollo/client";
import ClientRow from './ClientRow.js';
import Spinner from './Spinner';
import { GET_CLIENTS } from "../queries/clientQueries.js";


export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table tablehover mt-3">
          <thead>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </thead>
          <tbody>
            {data.clients.map(client => (
                <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
