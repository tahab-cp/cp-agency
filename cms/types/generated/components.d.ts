import type { Schema, Struct } from '@strapi/strapi';

export interface ButtonLinkButton extends Struct.ComponentSchema {
  collectionName: 'components_button_link_buttons';
  info: {
    displayName: 'link_button';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface DescriptionContentDescription extends Struct.ComponentSchema {
  collectionName: 'components_description_content_descriptions';
  info: {
    displayName: 'content_description';
  };
  attributes: {
    description_1: Schema.Attribute.Text;
    description_2: Schema.Attribute.Text;
  };
}

export interface GridGridCard1 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_card_1s';
  info: {
    displayName: 'grid_card_1';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
  };
}

export interface GridGridCard2 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_card_2s';
  info: {
    displayName: 'grid_card_2';
  };
  attributes: {
    grid_inner_card: Schema.Attribute.Component<'grid.grid-inner-card', true>;
  };
}

export interface GridGridCardColumn1 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_card_column_1s';
  info: {
    displayName: 'grid_card_column_1';
  };
  attributes: {
    title: Schema.Attribute.String;
    workflow_list: Schema.Attribute.Component<'list.workflow-list', false>;
  };
}

export interface GridGridCardColumn2 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_card_column_2s';
  info: {
    displayName: 'grid_card_column_2';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface GridGridCardRow extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_card_rows';
  info: {
    displayName: 'grid_card_row';
  };
  attributes: {
    grid_card_1: Schema.Attribute.Component<'grid.grid-card-1', false>;
    grid_card_2: Schema.Attribute.Component<'grid.grid-card-2', false>;
  };
}

export interface GridGridCardRow2 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_card_row_2s';
  info: {
    displayName: 'grid_card_row_2';
  };
  attributes: {
    grid_card_column_1: Schema.Attribute.Component<
      'grid.grid-card-column-1',
      false
    >;
    grid_card_column_2: Schema.Attribute.Component<
      'grid.grid-card-column-2',
      false
    >;
  };
}

export interface GridGridColumn1 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_column_1s';
  info: {
    displayName: 'grid_column_1';
  };
  attributes: {
    label: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface GridGridColumn2 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_column_2s';
  info: {
    displayName: 'grid_column_2';
  };
  attributes: {
    label: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface GridGridColumn3 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_column_3s';
  info: {
    displayName: 'grid_column_3';
  };
  attributes: {
    label: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface GridGridColumn4 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_column_4s';
  info: {
    displayName: 'grid_column_4';
  };
  attributes: {
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    label: Schema.Attribute.String;
  };
}

export interface GridGridInnerCard extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_inner_cards';
  info: {
    displayName: 'grid_inner_card';
  };
  attributes: {
    label_list: Schema.Attribute.Component<'list.label-list', true>;
    title: Schema.Attribute.String;
  };
}

export interface GridGridRow extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_rows';
  info: {
    displayName: 'grid_row';
  };
  attributes: {
    grid_column_1: Schema.Attribute.Component<'grid.grid-column-1', false>;
    grid_column_2: Schema.Attribute.Component<'grid.grid-column-2', false>;
    grid_column_3: Schema.Attribute.Component<'grid.grid-column-3', false>;
    grid_column_4: Schema.Attribute.Component<'grid.grid-column-4', false>;
  };
}

export interface GridGridRow2 extends Struct.ComponentSchema {
  collectionName: 'components_grid_grid_row_2s';
  info: {
    displayName: 'grid_row_2';
  };
  attributes: {
    grid_column_1: Schema.Attribute.Component<'grid.grid-column-1', false>;
    grid_column_2: Schema.Attribute.Component<'grid.grid-column-2', false>;
    grid_column_3: Schema.Attribute.Component<'grid.grid-column-3', false>;
  };
}

export interface HeadingContentTitle extends Struct.ComponentSchema {
  collectionName: 'components_heading_content_titles';
  info: {
    displayName: 'content_title';
  };
  attributes: {
    title_1: Schema.Attribute.String;
    title_2: Schema.Attribute.String;
  };
}

export interface ListLabelList extends Struct.ComponentSchema {
  collectionName: 'components_list_label_lists';
  info: {
    displayName: 'label_list';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface ListListItem extends Struct.ComponentSchema {
  collectionName: 'components_list_list_items';
  info: {
    displayName: 'list_item';
  };
  attributes: {
    label_1: Schema.Attribute.String;
    label_2: Schema.Attribute.String;
  };
}

export interface ListWorkflowList extends Struct.ComponentSchema {
  collectionName: 'components_list_workflow_lists';
  info: {
    displayName: 'workflow_list';
  };
  attributes: {
    list_item: Schema.Attribute.Component<'list.list-item', true>;
  };
}

export interface MediaImageGallery extends Struct.ComponentSchema {
  collectionName: 'components_media_image_galleries';
  info: {
    displayName: 'image_gallery';
  };
  attributes: {
    badge_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_column_1: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_column_2: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_column_3: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_column_4: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    image_column_5: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    main_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'button.link-button': ButtonLinkButton;
      'description.content-description': DescriptionContentDescription;
      'grid.grid-card-1': GridGridCard1;
      'grid.grid-card-2': GridGridCard2;
      'grid.grid-card-column-1': GridGridCardColumn1;
      'grid.grid-card-column-2': GridGridCardColumn2;
      'grid.grid-card-row': GridGridCardRow;
      'grid.grid-card-row-2': GridGridCardRow2;
      'grid.grid-column-1': GridGridColumn1;
      'grid.grid-column-2': GridGridColumn2;
      'grid.grid-column-3': GridGridColumn3;
      'grid.grid-column-4': GridGridColumn4;
      'grid.grid-inner-card': GridGridInnerCard;
      'grid.grid-row': GridGridRow;
      'grid.grid-row-2': GridGridRow2;
      'heading.content-title': HeadingContentTitle;
      'list.label-list': ListLabelList;
      'list.list-item': ListListItem;
      'list.workflow-list': ListWorkflowList;
      'media.image-gallery': MediaImageGallery;
    }
  }
}
