import { writable, type Writable } from "svelte/store";
import { type Auth, type User } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';

export let database: Writable<Firestore | null> = writable<Firestore| null>(null);
export let auth: Writable<Auth | null> = writable<Auth | null>(null);
export let user: Writable<User | null> = writable<User | null>(null);