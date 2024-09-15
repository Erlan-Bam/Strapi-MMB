import type { Schema, Attribute } from '@strapi/strapi';

export interface QuestionFaq extends Schema.Component {
  collectionName: 'components_question_faqs';
  info: {
    displayName: 'FAQ';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.Text;
  };
}

export interface NewsNews extends Schema.Component {
  collectionName: 'components_news_news';
  info: {
    displayName: 'News';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LinkLink extends Schema.Component {
  collectionName: 'components_link_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    text: Attribute.String;
    link: Attribute.Text;
  };
}

export interface ImageCard extends Schema.Component {
  collectionName: 'components_image_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    text: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface FeedbackFeedback extends Schema.Component {
  collectionName: 'components_feedback_feedbacks';
  info: {
    displayName: 'Feedback';
  };
  attributes: {
    name: Attribute.String;
    text: Attribute.String;
    link: Attribute.String;
  };
}

export interface AboutCard extends Schema.Component {
  collectionName: 'components_about_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    card_text: Attribute.String;
    card_paragraph: Attribute.Text;
    card_link: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'question.faq': QuestionFaq;
      'news.news': NewsNews;
      'link.link': LinkLink;
      'image.card': ImageCard;
      'feedback.feedback': FeedbackFeedback;
      'about.card': AboutCard;
    }
  }
}
