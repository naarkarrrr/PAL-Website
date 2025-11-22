'use client';

import { useState, useEffect } from 'react';
import { collection, getDocs, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { db } from '@/firebase';

// 🔹 Fetch all docs from a collection (one-time)
export function useCollection(path: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const snap = await getDocs(collection(db, path));
      setData(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    }
    fetchData();
  }, [path]);

  return { data, loading };
}

// 🔹 Real-time listener for a collection
export function useRealtimeCollection(path: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, path), (snap) => {
      setData(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });

    return () => unsubscribe();
  }, [path]);

  return { data, loading };
}

// 🔹 Get a single document
export function useDocument(path: string) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDoc() {
      const snap = await getDoc(doc(db, path));
      setData(snap.exists() ? snap.data() : null);
      setLoading(false);
    }

    fetchDoc();
  }, [path]);

  return { data, loading };
}
