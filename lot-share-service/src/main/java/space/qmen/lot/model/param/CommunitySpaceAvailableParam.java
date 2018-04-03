package space.qmen.lot.model.param;

/**
 * 获取当前可用车位数
 */

import lombok.Data;
import lombok.experimental.Accessors;


@Accessors(chain = true)
@Data
public class CommunitySpaceAvailableParam extends SpaceAvailableParam {
    private long communityId;

    // 搜索关键词
//    private String keyword;
}
