function PageNotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <h2 className="font-bold">ERROR 404: PAGE NOT FOUND</h2>
      <div>
        <p>
          It seems like you've tried to visit a page that doesn't exist... yet.
        </p>
      </div>
    </div>
  );
}

export default PageNotFound;
