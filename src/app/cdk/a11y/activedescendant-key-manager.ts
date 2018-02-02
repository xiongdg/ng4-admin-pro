import { ListKeyManager, ListKeyManagerOption } from './list-key-manager';

/**
 * This is the interface for highlightable items (used by the ActiveDescendantKeyManager).
 * Each item must know how to style itself as active or inactive and whether or not it is
 * currently disabled.
 */
export interface Highlightable extends ListKeyManagerOption {
    /** Applies the styles for an active item to this item. */
    setActiveStyles(): void;

    /** Applies the styles for an inactive item to this item. */
    setInactiveStyles(): void;
}

export class ActiveDescendantKeyManager<T> extends ListKeyManager<Highlightable & T> {

    /**
     * This method sets the active item to the item at the specified index.
     * It also adds active styles to the newly active item and removes active
     * styles from the previously active item.
     */
    setActiveItem(index: number): void {
        if (this.activeItem) {
            this.activeItem.setInactiveStyles();
        }
        super.setActiveItem(index);
        if (this.activeItem) {
            this.activeItem.setActiveStyles();
        }
    }

}
