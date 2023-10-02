import { writable, type Writable } from "svelte/store";
import { type Auth, type User } from 'firebase/auth';

export let auth: Writable<Auth | null> = writable<Auth | null>(null);
export let user: Writable<User | null> = writable<User | null>(null);