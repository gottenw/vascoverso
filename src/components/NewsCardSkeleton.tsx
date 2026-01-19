const NewsCardSkeleton = () => {
  return (
    <div className="bg-card-background rounded-lg shadow-md overflow-hidden">
      <div className="relative h-48 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>
      <div className="p-4">
        <div className="h-4 w-1/4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse mb-3"></div>
        <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded animate-pulse"></div>
      </div>
    </div>
  );
};

export default NewsCardSkeleton;
