import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Header from '../components/common/Header';
import PodcastCard from "../components/Podcasts/PodcastCard"
import Loader from '../components/common/Loader';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

function Profile() {
  const user = useSelector((state)=>state.user.user);
  const [podcasts,setPodcasts] = useState([]);
  console.log("My user", user);
  useEffect(() => {
    const fetchDocs = async () => {
      const q = query(
        collection(db, "podcasts"),
        where("createdBy", "==", user.uid)
      );
      const querySnapshot = await getDocs(q);
      const docsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPodcasts(docsData);
    };
    if (user) {
      fetchDocs();
    }
  }, [user]);

  if(!user){
    return <Loader />
  }


  return (
  <div>
    <Header/>
    <div className='input-wrapper' style={{marginTop:"2rem", paddingBottom:"2rem"}}>
      <h1>Profile</h1>
      <div
        style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "2rem",
            }}
      >
        <PodcastCard title={user.name} displayImage={user.profilePic} />
      </div>
      <h1 style={{ marginBottom: "2rem" }}>My Podcasts</h1>
      <div className="podcasts-flex">
          {podcasts.length === 0 ? (
            <p style={{ fontSize: "1.2rem" }}>You Have Zero Podcasts</p>
          ) : (
            <>
              {podcasts.map((podcast) => (
                <PodcastCard
                  key={podcast.id}
                  id={podcast.id}
                  title={podcast.title}
                  displayImage={podcast.displayImage}
                />
              ))}
            </>
          )}
        </div>
    </div>
  </div>
  )
}

export default Profile