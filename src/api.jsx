import { useState, useEffect } from "react";
import { url } from "./ApiConfig";


export const useFetch = (to) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url + to)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [to]);

  return { data, loading, error };
};


export const useFeacthPostComents = (id) => {
  const [comments, setComments] = useState(null);
  const [commentsError, setCommentsError] = useState(null);
  const [commentsLoad, setCommentsLoad] = useState(true);

  useEffect(() => {
    fetch(url + id + "/comments")
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setCommentsLoad(false);
      })
      .catch((error) => {
        setCommentsError(error);
      });
  }, []);

  return { comments, commentsLoad, commentsError };
};