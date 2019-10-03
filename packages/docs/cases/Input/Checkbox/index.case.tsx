import Checkbox from '@flow-ui/core/input/Checkbox';
import React, { Fragment, useState } from 'react';
import { CaseProps } from "../../../plugins/CaseWrapper";
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const CheckboxTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Checkbox"
                scope={{ Checkbox }}
                props={{ CheckboxTypes }}
                children={
                    <Checkbox
                        label="Check me"
                        {...CheckboxTypes[0]}
                    />
                }
                paths={[
                    `@flow-ui/core/input/Checkbox`,
                ]}
            />
            <UICaseDocumentation ns="CheckboxTypes" />
        </Fragment>
    )
}