import Fuse from 'fuse.js';
import { resumeKnowledgeBase } from './resumeData';

// Initialize Fuse with the knowledge base
const fuse = new Fuse(resumeKnowledgeBase, {
  keys: ['keywords', 'intent'],
  threshold: 0.4, // Lower threshold means stricter matching
  includeScore: true,
  ignoreLocation: true,
});

export async function generateEdgeAIResponse(message: string): Promise<string> {
  const query = message.toLowerCase();
  
  // Find the best matching intent
  const results = fuse.search(query);

  if (results.length > 0 && results[0].score! < 0.6) {
    // If a good match is found, return the predefined response
    return results[0].item.response;
  }

  // Fallback response if no good match is found
  return "I'm not entirely sure about that, but Veeresh is a highly adaptable engineer! You can always reach out to him directly at prakashmulge912@gmail.com for more specific details.";
}
