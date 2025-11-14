'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { travelPosts, locations, categories } from '@/lib/travelData';

function BlogContent() {
  const searchParams = useSearchParams();
  const locationFilter = searchParams.get('location');
  const categoryFilter = searchParams.get('category');

  let filteredPosts = travelPosts;

  if (locationFilter) {
    filteredPosts = filteredPosts.filter((post) => post.location === locationFilter);
  }

  if (categoryFilter) {
    filteredPosts = filteredPosts.filter((post) => post.category === categoryFilter);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Travel Stories
          </h1>
          <p className="text-xl text-gray-600">
            Discover amazing destinations and experiences
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-4 justify-center">
          <Link
            href="/blog"
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              !locationFilter && !categoryFilter
                ? 'bg-primary-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All Posts
          </Link>
          {locations.map((location) => (
            <Link
              key={location}
              href={`/blog?location=${location}`}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                locationFilter === location
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {location}
            </Link>
          ))}
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full">
                      {post.location}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {post.readTime} min read
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-primary-600 hover:text-primary-700 font-semibold"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No posts found matching your filters.</p>
            <Link
              href="/blog"
              className="mt-4 inline-block text-primary-600 hover:text-primary-700 font-semibold"
            >
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center">Loading...</div>}>
      <BlogContent />
    </Suspense>
  );
}

