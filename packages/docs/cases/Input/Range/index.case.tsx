import Range from '@flow-ui/core/input/Range';
import React, { useState, Fragment } from 'react';
import { CaseProps } from '../../../plugins/CaseWrapper';
import UICaseBlock from '@flow-ui/showcase/src/UI/components/UICaseBlock';
import UICaseDocumentation from "@flow-ui/showcase/src/UI/components/UICaseDocumentation";

export default (props: CaseProps) => {

    const RangeTypes = useState<any>({})

    return (
        <Fragment>
            <UICaseBlock
                title="Range"
                subtitle={``}
                scope={{ Range }}
                props={{ RangeTypes }}
                children={(
                    <Range
                        min={0}
                        max={100}
                        defaultValue={35}
                        {...RangeTypes[0]}
                    />
                )}
                paths={[
                    `@flow-ui/core/input/Range`,
                ]}
            />
            <UICaseDocumentation ns="RangeTypes" />
        </Fragment>
    )
}