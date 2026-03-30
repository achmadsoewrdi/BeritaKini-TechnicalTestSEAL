import { useState } from 'react';
import { User } from 'lucide-react';

const DUMMY_COMMENTS = [
  {
    id: 1,
    name: 'UWAIS AL QORNY',
    profession: 'Kuli Bangunan',
    date: '30 Mar 2026, 11:15',
    text: 'Mohon maaf, apakah sertfikatnya sudah tidak dapat diunduh ? Karena saya mau download ada corfimasi bahwa TOTP aktivasinya salah, bagaimana ya solusinya ?',
    avatar: 'https://i.pravatar.cc/150?u=1',
    replies: [
      {
        id: 11,
        name: 'BINA MURALI MANTAP',
        profession: 'PNS',
        date: '30 Mar 2026, 11:15',
        text: 'saya mengunduh sertifikatnya kok juga belum bisa',
        avatar: 'https://i.pravatar.cc/150?u=2',
        replies: []
      }
    ]
  }
];

export default function CommentSection() {
  const [commentText, setCommentText] = useState('');

  return (
    <section className="mt-12 pt-8" id="comment-section">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-1 h-6 bg-primary-500 rounded-full"></div>
        <h3 className="text-xl font-bold text-neutral-900">
          Komentar
        </h3>
      </div>

      {/* Editor/Input Section */}
      <div className="flex gap-4 mb-10">
        <div className="w-10 h-10 rounded-full bg-neutral-200 overflow-hidden flex-shrink-0">
          <img src="https://i.pravatar.cc/150?u=3" alt="Admin" className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
          <div className="relative border border-neutral-300 rounded-lg overflow-hidden focus-within:border-primary-500 focus-within:ring-1 focus-within:ring-primary-500 mb-4 transition-colors">
            <textarea
              placeholder="Ada yang ingin anda tanyakan?"
              className="w-full min-h-[100px] p-4 text-sm text-neutral-800 focus:outline-none resize-none"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              maxLength={50}
            />
            <div className="absolute bottom-2 right-3 text-xs text-neutral-400">
              {commentText.length}/50
            </div>
          </div>
          <button
            className="bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold py-2 px-6 rounded-md transition-colors"
          >
            Kirim
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {DUMMY_COMMENTS.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200">
              <img src={comment.avatar} alt={comment.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="text-sm font-semibold text-neutral-800">
                  {comment.name}
                </span>
                {comment.profession && (
                  <span className="text-xs text-neutral-500">
                    - {comment.profession}
                  </span>
                )}
                <span className="text-neutral-300 text-xs">•</span>
                <span className="text-xs text-neutral-400">{comment.date}</span>
              </div>
              <p className="text-sm text-neutral-700 leading-relaxed mb-2">
                {comment.text}
              </p>
              <button className="text-xs font-semibold text-primary-500 hover:underline mb-4">
                Balas
              </button>

              {/* Replies */}
              {comment.replies && comment.replies.length > 0 && (
                <div className="space-y-6 mt-4">
                  {comment.replies.map((reply) => (
                    <div key={reply.id} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-neutral-200">
                        <img src={reply.avatar} alt={reply.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="text-sm font-semibold text-neutral-800">
                            {reply.name}
                          </span>
                          {reply.profession && (
                            <span className="text-xs text-neutral-500">
                              - {reply.profession}
                            </span>
                          )}
                          <span className="text-neutral-300 text-xs">•</span>
                          <span className="text-xs text-neutral-400">{reply.date}</span>
                        </div>
                        <p className="text-sm text-neutral-700 leading-relaxed mb-2">
                          {reply.text}
                        </p>
                        <button className="text-xs font-semibold text-primary-500 hover:underline">
                          Balas
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-6 border-t border-neutral-100 gap-4">
        <div className="flex items-center gap-2 text-sm text-neutral-600">
          <span>Item per page</span>
          <select className="border border-neutral-300 rounded px-2 py-1 bg-white focus:outline-none focus:border-primary-500">
            <option>5</option>
            <option>10</option>
            <option>20</option>
          </select>
          <span className="pl-4">of 200</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 flex items-center justify-center rounded border border-neutral-200 text-neutral-400 hover:bg-neutral-50 transition-colors">
            {'<'}
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded bg-primary-50 border border-primary-500 text-primary-500 font-medium">
            1
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent text-neutral-600 hover:bg-neutral-50 hover:border-neutral-200 transition-colors">
            2
          </button>
          <button className="text-neutral-400 hover:text-neutral-600 transition-colors px-1">
            ...
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded border border-neutral-200 text-neutral-600 hover:bg-neutral-50 transition-colors">
            {'>'}
          </button>
        </div>
      </div>
    </section>
  );
}
