
import { marked } from 'marked';

/**
 * Service for processing markdown data
 */
export class MarkdownService {
  /**
   * Parse markdown data to HTML
   */
  public parseMarkdownToHtml(markdown: string): string {
    try {
      return marked.parse(markdown, {
        gfm: true, // GitHub flavored markdown
        breaks: true, // Convert line breaks to <br>
      }) as string;
    } catch (error) {
      console.error('Error parsing markdown:', error);
      return '<p>Error parsing data</p>';
    }
  }
}
