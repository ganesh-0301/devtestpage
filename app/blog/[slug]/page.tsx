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
    <article className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative h-[500px] mb-12">
        <Image
          src={post.featuredImage}
          alt={post.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-purple-900/30 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 text-white">
            <div className="flex items-center gap-4 mb-6 flex-wrap">
              <span className="px-4 py-2 bg-purple-600 rounded-full text-sm font-semibold shadow-lg">
                {post.location}
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm border border-white/30">
                {post.category}
              </span>
              <span className="text-sm text-purple-100">{post.readTime} min read</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">{post.title}</h1>
            <p className="text-xl text-purple-100">{post.excerpt}</p>
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
              className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 group"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Back to All Posts
            </Link>
          </div>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          {post.content.sections.map((section, index) => (
            <div key={index} className="mb-12">
              {/* Section Heading */}
              <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12 first:mt-0 border-b-2 border-purple-200 pb-3">
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
                  className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-purple-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h4 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 hover:text-purple-700 transition-colors">
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

