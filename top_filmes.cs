#movies-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.movie {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
}

.movie img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.movie p {
  text-align: center;
}
