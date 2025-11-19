'use client';
import { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { initializeFirebase } from '@/firebase';

const { firestore } = initializeFirebase();

export function useCollectionData(collectionName: string) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!collectionName) {
        setIsLoading(false);
        return;
    };

    const collectionRef = collection(firestore, collectionName);

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
        const documents = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(documents);
        setIsLoading(false);
    }, (err) => {
        console.error("Error fetching collection: ", err);
        setError(err);
        setIsLoading(false);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { data, isLoading, error };
}
