/* src/pages/ApiData.jsx */
import { useEffect, useState } from "react";
import Layout from "../layout/Layout";
import Card from "../components/Card";
import Button from "../components/Button";

// Import local quotes JSON
import quotes from "../data/quotes.json";

const ApiData = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 6; // number of items per page

  // Load local quotes on mount
  useEffect(() => {
    setData(quotes);
    setFilteredData(quotes);
  }, []);

  // Search filter
  useEffect(() => {
    if (search.trim() === "") {
      setFilteredData(data);
    } else {
      setFilteredData(
        data.filter((item) =>
          item.text.toLowerCase().includes(search.toLowerCase()) ||
          (item.author && item.author.toLowerCase().includes(search.toLowerCase()))
        )
      );
    }
    setPage(1); // reset to first page when searching
  }, [search, data]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / limit);
  const start = (page - 1) * limit;
  const end = start + limit;
  const currentPageData = filteredData.slice(start, end);

  return (
    <Layout>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
          Inspirational Quotes 
        </h1>

        {/* Search */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search quotes or authors..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-2/3 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Data */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentPageData.map((item, index) => (
            <Card key={index} title={item.author || "Unknown"}>
              <p className="text-gray-700 dark:text-gray-300">
                “{item.text}”
              </p>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        {filteredData.length > limit && (
          <div className="flex justify-center items-center gap-4 mt-6">
            <Button
              variant="secondary"
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
            >
              Prev
            </Button>
            <span className="text-gray-600 dark:text-gray-300">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="secondary"
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
            >
              Next
            </Button>
          </div>
        )}
      </section>
    </Layout>
  );
};

export default ApiData;
