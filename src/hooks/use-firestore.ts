'use client';

import { useState, useEffect } from 'react';
import { collection, onSnapshot, doc, DocumentData, getDoc, FirestoreError } from 'firebase/firestore';
import { db } from '@/firebase';

// Real-time listener for a collection
export function useRealtimeCollection(collectionName: string) {
  const [data, setData] = useState<any[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<FirestoreError | null>(null);

  useEffect(() => {
    if (!collectionName) {
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    const collectionRef = collection(db, collectionName);

    const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
      const docs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setData(docs);
      setIsLoading(false);
    }, (err) => {
      console.error(`Error fetching collection ${collectionName}:`, err);
      setError(err);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [collectionName]);

  return { data, isLoading, error };
}

// Real-time listener for a single document
export function useDoc<T>(docPath: string) {
    const [data, setData] = useState<(T & { id: string }) | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<FirestoreError | null>(null);

    useEffect(() => {
        if (!docPath) {
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        try {
            const docRef = doc(db, docPath);

            const unsubscribe = onSnapshot(docRef, (docSnap) => {
                if (docSnap.exists()) {
                    setData({ id: docSnap.id, ...docSnap.data() } as T & { id: string });
                } else {
                    setData(null); // Document does not exist
                }
                setIsLoading(false);
            }, (err) => {
                console.error(`Error fetching document ${docPath}:`, err);
                setError(err);
                setIsLoading(false);
            });

            return () => unsubscribe();
        } catch (err) {
            console.error("Error creating document reference:", err);
            setError(err as FirestoreError);
            setIsLoading(false);
            return;
        }
    }, [docPath]);

    return { data, isLoading, error };
}
