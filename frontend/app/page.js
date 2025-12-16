"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [guestbooks, setGuestbooks] = useState([]);

  // 목록 조회 (GET)
  const fetchGuestbooks = async () => {
    const res = await fetch("http://localhost:8080/api/guestbooks");
    const data = await res.json();
    setGuestbooks(data);
  };

  // 등록 (POST)
  const submitGuestbook = async (e) => {
    e.preventDefault();

    await fetch("http://localhost:8080/api/guestbooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, message }),
    });

    setName("");
    setMessage("");
    fetchGuestbooks();
  };

  useEffect(() => {
    fetchGuestbooks();
  }, []);

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">📘 Guestbook</h1>

      <form onSubmit={submitGuestbook} className="space-y-3 mb-8">
        <input
          className="w-full border rounded p-2"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          className="w-full border rounded p-2"
          placeholder="메시지"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          등록
        </button>
      </form>

      <ul className="space-y-4">
        {guestbooks.map((g) => (
          <li key={g.id} className="border rounded p-4">
            <div className="font-semibold">{g.name}</div>
            <div className="text-gray-700 text-sm">{g.message}</div>
          </li>
        ))}
      </ul>
    </main>
  );
}