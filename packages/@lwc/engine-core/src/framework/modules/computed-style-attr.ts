/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { isNull, isString } from '@lwc/shared';

import { VBaseElement } from '../vnodes';

// The style property is a string when defined via an expression in the template.
export function patchStyleAttribute(oldVnode: VBaseElement | null, vnode: VBaseElement) {
    const {
        elm,
        data: { style: newStyle },
    } = vnode;

    const oldStyle = isNull(oldVnode) ? undefined : oldVnode.data.style;
    if (oldStyle === newStyle) {
        return;
    }

    const {
        owner: {
            renderer: { setAttribute, removeAttribute },
        },
    } = vnode;
    if (!isString(newStyle) || newStyle === '') {
        removeAttribute(elm, 'style');
    } else {
        setAttribute(elm, 'style', newStyle);
    }
}
