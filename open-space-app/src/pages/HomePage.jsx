import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TalkInput from '../components/TalkInput';
import TalksList from '../components/TalksList';
import { asyncAddTalk, asyncToggleLikeTalk } from '../states/talks/action';
import { asyncPopulateUsersAndTalks } from '../states/shared/action';

function HomePage() {
  // @TODO: get talks, users, and authUser state from store
  const talks = useSelector((states) => states.talks);

  // @TODO: get talks, users, and authUser state from store
  const users = useSelector((states) => states.users);
  // @TODO: get talks, users, and authUser state from store
  const authUser = useSelector((states) => states.authUser);

  const dispatch = useDispatch(); // @TODO: get dispatch function from store

  useEffect(() => {
    // @TODO: dispatch async action to populate talks and users data
    dispatch(asyncPopulateUsersAndTalks());
  }, [dispatch]);

  const onAddTalk = (text) => {
    // @TODO: dispatch async action to add talk
    dispatch(asyncAddTalk({ text }));
  };

  const onLike = (id) => {
    // @TODO: dispatch async action to toggle like talk
    dispatch(asyncToggleLikeTalk(id));
  };

  const talkList = talks.map((talk) => ({
    ...talk,
    user: users.find((user) => user.id === talk.user),
    authUser: authUser.id,
  }));

  return (
    <section className="home-page">
      <TalkInput addTalk={onAddTalk} />
      <TalksList talks={talkList} like={onLike} />
    </section>
  );
}

export default HomePage;
