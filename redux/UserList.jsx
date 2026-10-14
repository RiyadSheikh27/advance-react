import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function UserList() {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => state);

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS_REQUEST' });
  }, [dispatch]);

  if (loading) return <p>লোড হচ্ছে...</p>;
  if (error) return <p>সমস্যা: {error}</p>;

  return (
    <ul>
      {users.map(u => <li key={u.id}>{u.name}</li>)}
    </ul>
  );
}