import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { travelPosts } from '@/lib/travelData';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = travelPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-96 mb-12">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-4 py-2 bg-primary-600 rounded-full text-sm font-semibold">
                {post.location}
              </span>
              <span className="px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm">
                {post.category}
              </span>
              <span className="text-sm">{post.readTime} min read</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-gray-200">{post.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Meta Information */}
        <div className="border-b border-gray-200 pb-6 mb-8">
          <div className="flex items-center justify-between text-gray-600">
            <span>
              Published on {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <Link
              href="/blog"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              ← Back to All Posts
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              {/* Section Heading */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 first:mt-0">
                {section.heading}
              </h2>

              {/* Section Images */}
              {section.images && section.images.length > 0 && (
                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {section.images.map((imageUrl, imgIndex) => (
                    <div key={imgIndex} className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={`${section.heading} - Image ${imgIndex + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Section Paragraphs */}
              {section.paragraphs.map((paragraph, paraIndex) => (
                <p
                  key={paraIndex}
                  className="text-gray-700 text-lg leading-relaxed mb-4"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Related Posts */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            More Stories from {post.location}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {travelPosts
              .filter((p) => p.location === post.location && p.id !== post.id)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </article>
  );
}

