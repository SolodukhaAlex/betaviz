import originalCardState from './originalCardState';
import headerState from './headerState';
import navBarState from './navBarState';
import orderInformationState from './orderInformationState';
import cardTemplatesState from './cardTemplatesState';
import uploadCardBuilderState from './uploadCardBuilderState';

export const initialState = {
  header: headerState,
  navBar: navBarState,
  originalCard: originalCardState,
  orderInfo: orderInformationState,
  cardTemplates: cardTemplatesState,
  uploadCardBuilder: uploadCardBuilderState,
};
