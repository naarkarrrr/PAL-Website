"use client";

import { useState, useEffect } from "react";
import { collection, getDocs, onSnapshot, doc, getDoc, DocumentReference } from "firebase/firestore";
import { db } from "@/firebase"; // <- use db, not initializeFirebase

// Fetch all docs from a collection
export function useCollection(collectionName: string) {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = collection(db, collectionName);
    const unsub = onSnapshot(ref, (snapshot) => {
      setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      setLoading(false);
    });

    return () => unsub();
  }, [collectionName]);

  return { data, loading };
}

// Fetch a single document
export function useDocument(path: string) {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ref = doc(db, path);

    const unsub = onSnapshot(ref, (snapshot) => {
      setData(snapshot.exists() ? snapshot.data() : null);
      setLoading(false);
    });

    return () => unsub();
  }, [path]);

  return { data, loading };
}
