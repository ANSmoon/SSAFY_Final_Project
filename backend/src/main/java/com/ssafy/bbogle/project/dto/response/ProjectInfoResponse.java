package com.ssafy.bbogle.project.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import java.time.LocalDate;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
@Schema(description = "프로젝트 정보 응답 DTO")
public class ProjectInfoResponse {

    @Schema(description = "프로젝트 아이디")
    private Integer id;

    @Schema(description = "이미지")
    private String image;

    @Schema(description = "제목")
    private String title;

    @Schema(description = "개요")
    private String description;

    @Schema(description = "진행상태")
    private Boolean status;

    @Schema(description = "시작날짜")
    private LocalDate startDate;

    @Schema(description = "종료날짜")
    private LocalDate endDate;

    @Schema(description = "알림 상태")
    private Boolean notificationStatus;

}
